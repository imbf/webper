package econo.webper.server.component;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @NoArgsConstructor @Getter
@Inheritance(strategy = InheritanceType.JOINED)
public class Component {

    @Id
    @GeneratedValue
    private Integer id;

    private String title;

    private Integer directoryId;

    public Component(String title, Integer directoryId) {
        this.title = title;
        this.directoryId = directoryId;
    }

}
