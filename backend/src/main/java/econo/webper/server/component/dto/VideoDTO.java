package econo.webper.server.component.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VideoDTO {

    private String title;

    private Integer directoryId;

    private String thumbnailURL;

    private String redirectionLink;

}
