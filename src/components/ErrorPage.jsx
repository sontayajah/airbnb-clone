import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h1 className="danger-color">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {error.status} {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}

export default ErrorPage