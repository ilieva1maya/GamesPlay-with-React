import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function Details() {
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState({});
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getOne(id)
            .then(setGame)

        commentService.getAll(id)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL__COMMENTS',
                    payload: result,
                })
            })
    }, [id]);

    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            id,
            values.comment,
        );

        newComment.owner = { email };

        // setComments(state => [...state, { ...newComment, author: { email } }]);
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        });
    };

    const deleteButtonHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title}?`);

        if (hasConfirmed) {
            await gameService.remove(id);
            navigate(Path.Catalog);
        }
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}

                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}

                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}

                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.Edit, { id })} className="button">Edit</Link>
                        {/* <Link to={pathToUrl(Path.Delete, { id })} className="button">Delete</Link> */}
                        <button className="button" onClick={deleteButtonHandler}>Delete</button>
      
                    </div>
                )}

            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}