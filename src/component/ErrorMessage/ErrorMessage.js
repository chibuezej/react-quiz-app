import './Error.css'
function ErrorMessage ({children}) {
    return (
        <div className="Error">
            {children}
        </div>
    )
}
export default ErrorMessage;