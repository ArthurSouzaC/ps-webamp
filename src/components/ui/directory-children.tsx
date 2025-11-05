import BookIcon from "../../assets/icons/book.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookopenedIcon from "../../assets/icons/bookopened.svg";
import CameraIcon from "../../assets/icons/camera-photo.svg";
import FileIcon from "../../assets/icons/file.svg";
import NoteIcon from "../../assets/icons/note.svg";

interface DirectoryChildrenProps {
  data: {
    name: string;
    icon: string;
    links: {
        name:string;
        url: string;
    }[]
  };
}

const iconMap: { [key: string]: string } = {
  book: BookIcon,
  bookmark: BookmarkIcon,
  bookopened: BookopenedIcon,
  camera: CameraIcon,
  file: FileIcon,
  note: NoteIcon,
};

export const DirectoryChildren = ({ data }: DirectoryChildrenProps) => {
  const { name, icon, links } = data;

  return (
    <div className="flex flex-col items-start">
        <div className="flex flex-row gap-2">
            <img className="flex font-xs w-4 h" src={iconMap[icon]} alt={icon}  />
            <span className="flex font-helvetica uppercase text-base">
                {name}
            </span>
        </div>
        <div className="flex flex-col border-l ml-7">
             {links.map((link, index) => (
          <div key={index} className="flex gap-1 items-center ">
            <div className="w-6 border border-b-0"/>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              {link.name}
            </a>
          </div>
        ))}
        </div>
    </div>
  );
};
