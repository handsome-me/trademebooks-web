package com.chosensolutions;

import com.chosensolutions.controllers.pages.PagesController;
import org.junit.Test;

import static org.junit.Assert.*;

public class AppTest {

    @Test
    public void testApp() {
        PagesController pagesController = new PagesController();
        String aboutPage = pagesController.about();
        assertEquals(aboutPage, "pages/about");
    }
}
