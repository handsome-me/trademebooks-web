package com.chosensolutions.cusbe.repositories;

import com.chosensolutions.cusbe.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByUserId(String userId);

}
