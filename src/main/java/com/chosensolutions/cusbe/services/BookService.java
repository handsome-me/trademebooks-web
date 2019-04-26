package com.chosensolutions.cusbe.services;

import com.chosensolutions.cusbe.models.Book;
import com.chosensolutions.cusbe.repositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {

    @Autowired
    private BooksRepository booksRepository;

    @Autowired
    private IUserService userService;

    public List<Book> getAllAuthBooks() {
        return userService.getCurrentAuthUser().getBookStore().getBooks();
    }

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        booksRepository.findAll().iterator().forEachRemaining(books::add);
        return books;
    }

/*    public Book getBookById(long id) {
        Book book = booksRepository.findById((new Long(id)));
        return book;
    }*/

    public void createBook(Book book) {
        booksRepository.save(book);
    }

    public void updateBook(String id, Book book) {
        booksRepository.save(book);
    }

/*    public void deleteBook(String id) {
        booksRepository.deleteById(id);
    }*/
}
