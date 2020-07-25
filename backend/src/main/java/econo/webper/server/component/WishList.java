package econo.webper.server.component;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity @NoArgsConstructor
@Getter
public class WishList extends Component {

    private String thumbnailURL;

    private String redirectionLink;

    private int price;

    private String deliveryType;

    private String description;

    public WishList(String title, Integer directoryId, String thumbnailURL, String redirectionLink, int price, String deliveryType, String description) {
        super(title, directoryId);
        this.thumbnailURL = thumbnailURL;
        this.redirectionLink = redirectionLink;
        this.price = price;
        this.deliveryType = deliveryType;
        this.description = description;
    }
}
