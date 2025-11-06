import BookLightIcon from "../assets/icons/light/book.svg";
import BookmarkLightIcon from "../assets/icons/light/bookmark.svg";
import BookopenedLightIcon from "../assets/icons/light/bookopened.svg";
import CameraLightIcon from "../assets/icons/light/camera-photo.svg";
import FileLightIcon from "../assets/icons/light/file.svg";
import NoteLightIcon from "../assets/icons/light/note.svg";
import BookIcon from "../assets/icons/dark/book.svg";
import BookmarkIcon from "../assets/icons/dark/bookmark.svg";
import BookopenedIcon from "../assets/icons/dark/bookopened.svg";
import CameraIcon from "../assets/icons/dark/camera-photo.svg";
import FileIcon from "../assets/icons/dark/file.svg";
import NoteIcon from "../assets/icons/dark/note.svg";

export const iconMap: { [key: string]: { [key: string]: string } } = {
  light: {
    book: BookLightIcon,
    bookmark: BookmarkLightIcon,
    bookopened: BookopenedLightIcon,
    camera: CameraLightIcon,
    file: FileLightIcon,
    note: NoteLightIcon,
  },
  dark: {
    book: BookIcon,
    bookmark: BookmarkIcon,
    bookopened: BookopenedIcon,
    camera: CameraIcon,
    file: FileIcon,
    note: NoteIcon,
  },
};
