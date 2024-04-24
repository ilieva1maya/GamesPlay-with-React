export default function Comment({    
    username,
    text
}) {
    return (
        <li className="comment">
            <p>{username}: {text}</p>
        </li>
    )
}