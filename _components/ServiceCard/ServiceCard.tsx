export default function Card({title,description,icon}: {title:string,description:string,icon:string}) {
    return(<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="mb-4 text-sm text-white/70">
                {description}
              </p>
              <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                Learn More
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>);
}