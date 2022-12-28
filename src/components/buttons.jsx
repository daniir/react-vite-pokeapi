import React from 'react'

export default function Buttons({ offset, PreviousPage, NextPage }) {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-5">
            <button
                className='btn btn-primary'
                disabled={offset === 1 ? true : false}
                onClick={() => PreviousPage()}
            >
                Previous
            </button>
            <button
                className='btn btn-primary'
                onClick={() => NextPage()}
            >
                Next
            </button>
        </div>
    )
};
