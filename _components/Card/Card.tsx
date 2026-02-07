"use client";


import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../MotionWrapper/Motion";
import { useState } from "react";
export function Card({
  image,
  title,
  date,
  category,
  description,
  details,
}: {
  image: string;
  title: string;
  date: string;
  category: string;
  description: string;
  details?: string;
}) {
    const [showDetails, setShowDetails] =useState(false);
     const toggleDetails = (e: React.MouseEvent) => {
    setShowDetails((prev) => !prev);
    e.stopPropagation();
  };
  return (
    
    <div className=" flex-shrink-0 overflow-hidden block h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:shadow-xl max-w-sm">
      <div className="h-50 w-auto relative">

      
        <Image
          className="rounded-lg object-cover"
          src={image}
          alt={title}
          fill
        //   height={200}
        //   width={400}
        />
      
      </div>

      <Link href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
      </Link>

      <span className="inline-flex items-center mb-4 bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-medium px-1.5 py-0.5 rounded">
        <svg
          className="w-3 h-3 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
          />
        </svg>
        {category} | {date}
      </span>

      <p className="mb-6 text-gray-700">
        {description}
      </p>
       {showDetails && (
				<div
                    className="my-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-800"
					style={{
						whiteSpace: 'pre-line',
					}}
				>
					{details}
				</div>
			)}
      <div
        onClick={(event)=>toggleDetails(event)}
        className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-emerald-500 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200"
      >
       {showDetails ? "Cacher les détails" : "En Savoir Plus"}
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </div>
  );
}
