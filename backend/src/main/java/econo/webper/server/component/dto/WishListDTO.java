package econo.webper.server.component.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WishListDTO {

    private String title;

    private Integer directoryId;

    private String thumbnailURL;

    private String redirectionLink;

    private int price;

    private String deliveryType;

    private String description;
}
