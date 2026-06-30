
export interface LinkProps {
    url: string
    title: string
}
const Link = ({ url, title }: LinkProps) => {

    return (

        <a className="w-full block text-center bg-grey-700 text-white font-bold leading-11 rounded-lg transition-colors hover:bg-green hover:text-grey-900 active:bg-green active:text-grey-900 focus:bg-green focus:text-grey-900 focus:outline-2 focus:outline-offset-2 focus:outline-green"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {title}
        </a>

    )
}

export default Link