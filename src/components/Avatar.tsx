interface avatarProps{
    url ?:string | null | undefined
}

const Avatar: React.FC<avatarProps> = ({url}) => {
    return (
        <div>
            <img className="rounded-full w-[30px] h-[30px]" src={url || "/images/placeholder.jpg"} alt="avatar" />
        </div>
    )
}
export default Avatar