import {PhotoService} from "./services/photo.service";

export function initServicesFactory(photoService: PhotoService) {
  return () => {
    return photoService.load().then(photoServices => {});
  }
}
