package com.chosensolutions.trademebooks.controllers.pages;

import com.chosensolutions.trademebooks.models.BookStore;
import com.chosensolutions.trademebooks.services.book.BookStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BookStoreController {

    @Autowired
    BookStoreService bookStoreService;

    @RequestMapping("/my-book-store")
    public String index(Model model) {
        model.addAttribute("bookStores", bookStoreService.getAll());

        return "book-stores/book-stores.index";
    }

    @RequestMapping("/book-stores/1")
    public String show(/*@RequestParam int id, */Model model) {
        BookStore bookStore = bookStoreService.getById();
        model.addAttribute(bookStore);

        return "book-stores/book-stores.show";
    }
}
