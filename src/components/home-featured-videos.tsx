import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react"
import { CircleChevronLeft } from "lucide-react"
import { Play } from "lucide-react"
import { VolumeOff } from "lucide-react"
import { CaptionsOff } from "lucide-react"

import Video from 'next-video';
import homes825c9f from '/public/videos/homes825c9f.jpeg';
 
export default function HomeFeaturedVideos() {
  return (
	<>
		<div className="header-section mb-4">
			<h2 className="text-3xl">Featured in Videos</h2>
			<h3 className="text-lg">See what creators are sharing</h3>
		</div>
		<div className="container-section">
			<div className="wrapper relative">
				<Link href="" className="absolute z-20 left-0 top-[20%]"><CircleChevronLeft strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
				<ul className="carousel-container overflow-x-scroll">
					<li className="lg:w-3/12 border-2 border-slate-100">
						<fieldset>
							<legend><span>Video from @baggott_farmhouse</span></legend>
							<div className="relative rounded-lg ">
								<video width="320" height="240" controls preload="none" className="rounded-lg">
								  <source src={"/public/videos/720x1280_PROGRESSIVE_a72.mp4"} type="video/mp4" />
								  Your browser does not support the video tag.
								</video>
 
								<div>
									<button><Play /></button>
									<button><VolumeOff /></button>
									<button><CaptionsOff /></button>
								</div>
								<div>@baggott_farmhouse</div>
							</div>
							<div className="w-full flex flex-column">
								<Link href="/" className="flex bg-slate-500 justify-between no-underline flex">
									<div className="rounded-lg">
										<Image src={homes825c9f} alt={"homes825c9f"} width={102} height={102} />
									</div>
									<div className="flex flex-col ">
										<span>$9.98</span>
										<span>Mainstays 16.5 inch Wall Mounted Floating Shelves 2pack, Natural</span>
									</div>
								</Link>
							</div>
						</fieldset>
					</li>
				</ul>
				<h2>Block Home Featured Videos</h2>
				
				<Link href="" className="absolute z-20 right-0 top-[20%]"><CircleChevronRight strokeWidth={0.5} className="w-14 h-14 text-gray-900 fill-gray-100" /></Link>
			</div>
		</div>
	</>
  )
}