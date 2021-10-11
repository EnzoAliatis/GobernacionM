import React from 'react'
import { Spinner } from '../ui/Spinner'

export const SubmitSpinner = ({ text, isLoading }) => {
    return (
        <>
            {
                !isLoading ? (
                    <input className="primaryBtn" value={text} type="submit" />
                ) : (
                    <Spinner />
                )
            }
        </>
    )
}
