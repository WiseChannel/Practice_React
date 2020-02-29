import React from 'react'
import _ from 'lodash'

export const Pagination = (props) => {

    const {itemCount, pageSize, onPageChange} = props
    const pagesCount = Math.ceil(itemCount / pageSize)
    if(pagesCount === 1) return null
    const pages = _.range(1, pagesCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">

                {pages.map(page => (
                    <li key={page} className="page-item">
                        <a
                            onClick={() => props.onPageChange(page)}
                             className='page-link'>{page}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

