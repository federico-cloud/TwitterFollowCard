import { useState } from "react";

export function TwitterFollowCard ({userName, name}){

    const [isFollowing, setIsFollowing] = useState(false);

    const imageSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'tw-folloWCard-button is-following' : 'tw-followCard-button';

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt='Avatar persona' src={imageSrc}/>
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>

        <aside>
            <button onClick={handleFollow} className={buttonClassName}>
                {text}
            </button>
        </aside>
    </article>
    )
}