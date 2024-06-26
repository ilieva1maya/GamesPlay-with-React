import * as gameService from "../../services/gameService"
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    const createGameSubmitHandler = async (e) => {
        e.preventDefault();
        // const {
        //     title,
        //     category,
        //     maxLevel,
        //     imageUrl,
        //     summary,
        // } = Object.fromEntries(new FormData(e.currentTarget))
        // ИЛИ

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            // понеже никъде не използваме result
            // const result = await gameService.create(gameData);
            // можем да го направим така
            await gameService.create(gameData);
            navigate('/games');
        } catch (error) {
            // в последствие някаква логика, нотификация за грешки
            console.log(`Error from create.jsx: ${error}`);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameSubmitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}