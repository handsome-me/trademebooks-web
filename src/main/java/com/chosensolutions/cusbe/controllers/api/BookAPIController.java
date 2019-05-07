package com.chosensolutions.cusbe.controllers.api;

import com.chosensolutions.cusbe.models.Book;
import com.chosensolutions.cusbe.services.book.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("/api")
@RestController
public class BookAPIController {

    private BookService bookService;

    public BookAPIController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/books")
    public List<Book> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        System.out.println(books.get(0).getBookStore().getName());

        return books;
    }

    @RequestMapping("/auth/books")
    public List<Book> getAllAuthBooks() {
        System.out.println("all auth books");
        List<Book> theBooks = new ArrayList<>();

        return theBooks;
    }

/*    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Book show(@PathVariable("id") String id) {
        return bookService.getBookById(id);
    }*/

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void create(@RequestBody Book book) {
    }

/*    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void delete(@PathVariable("id") String id) {
        bookService.deleteBook(id);
    }*/
}
