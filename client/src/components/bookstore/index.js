import React, { useEffect, useState } from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import api from '../../utils/api'

import Books from '../books/common/Books'

const BookStore = ({ match }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get(`/bookstores/${match.params.username}`)
        const books = response.data.data.books
        setBooks(books)
      } catch (error) {
        console.log({ error })
      }
    })()
  }, [match.params.username])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">
          Welcome to {match.params.username}'s Bookstore
        </h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol sm="12">
              {books.length < 1 ? (
                <div>There are no books in this bookstore...</div>
              ) : (
                <Books books={books} />
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default BookStore
