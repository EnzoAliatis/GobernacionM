import React from 'react'

export const Spinner = () => {
    return (
        <div style={{ width: '35px' }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
