import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-300">
      <Image src={props.logo} width={100} height={100} className="mx-auto" alt="" />
      <h3 className=" text-lg font-medium pt-8 pb-2">{props.name}</h3>
      <p className="py-2 ">{props.desc}</p>
      <div className="py-4 grid grid-cols-2">
      <a href={props.link} className="text-teal-600 hover:text-teal-900">Github</a>
      <a href={props.website} className="text-teal-600 hover:text-teal-900">Website</a>
      </div>
      <p className="text-gray-800 py-1 ">{props.tech1}</p>
      <p className="text-gray-800 py-1 ">{props.tech2}</p>
      <p className="text-gray-800 py-1 ">{props.tech3}</p>
    </div>
  );
}
