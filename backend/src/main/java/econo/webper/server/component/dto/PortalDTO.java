package econo.webper.server.component.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PortalDTO {

    private String title;

    private Integer directoryId;

    private String faviconURL;

    private String redirectionLink;

    private String description;
}
