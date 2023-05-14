import Avatar from "./Avatar"

interface nameFieldProps{
    name: string,
    email: string
    url ?: string
}

const NameField : React.FC<nameFieldProps> = ({name, email, url}) => {
    return(
        <div className="flex flex-row items-center gap-2">
            <div>
                <Avatar url={url} />
            </div>
            <div className="flex flex-col justify-start">
                <div>
                    {name}
                </div>
                <div className="font-light text-sm text-slate-500">
                    {email}
                </div>
            </div>
        </div>
    )
}
export default NameField