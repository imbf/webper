package econo.webper.server.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import econo.webper.server.login.GoogleUserinfoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    UserRepository userRepository;

    @Autowired
    ObjectMapper objectMapper;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(GoogleUserinfoDTO googleUserinfoDTO, List<UserRole> userRoles) {
        User user = User.builder()
                .email(googleUserinfoDTO.getEmail())
                .name(googleUserinfoDTO.getName())
                .roles(userRoles)
                .build();
        return userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(NoSuchElementException::new);
    }



}
