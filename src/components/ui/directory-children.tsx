import { iconMap } from "../../data/icons";

interface DirectoryChildrenProps {
  data: {
    name: string;
    icon: string;
    links: {
      name: string;
      url: string;
    }[];
  };
}

export const DirectoryChildren = ({ data }: DirectoryChildrenProps) => {
  const { name, icon, links } = data;

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row gap-2">
        <img
          className="flex font-xs w-4 h"
          src={iconMap["dark"][icon]}
          alt={icon}
        />
        <span className="flex font-helvetica uppercase text-base">{name}</span>
      </div>
      <div className="flex flex-col border-l ml-7">
        {links.map((link, index) => (
          <div key={index} className="flex gap-1 items-center ">
            <div className="w-6 border border-b-0" />
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
