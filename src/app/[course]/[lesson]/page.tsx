import { courses } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Lesson({ params }: { params: { course: string; lesson: string } }) {
	const courseData = courses().find((course) => (course.slug === params.lesson ? course : false))

	if (!courseData) {
		return <>Bunday kurs mavjud emas!</>
	}

	return (
		<div>
			<div className="h-[100px]" />

			<h3 className="h3">
				{courseData.title} {courseData.subTitle}
			</h3>

			<div className="h-[50px]" />

			<div className="grid grid-cols-2 gap-7">
				<a
					href={courseData.file}
					target="_blank"
					className="bg-white/10 rounded-md flex items-center justify-between py-2 px-2 active:scale-95 duration-def cursor-pointer select-none"
				>
					<div className="flex items-center gap-3">
						<Image
							src={courseData.image.url}
							alt={courseData.image.alt}
							height={25}
							width={25}
							className="select-none"
						/>
						<p className="p">{courseData.title} (pdf)</p>
					</div>

					<div className="rounded-full w-7 h-7 p-1 flex-shrink-0 bg-white/10 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.197"
								d="M12.924 9.865v2.394a1.197 1.197 0 01-1.197 1.197h-8.38A1.197 1.197 0 012.15 12.26V9.865M4.544 6.872l2.992 2.993 2.993-2.993M7.537 9.865V2.682"
							></path>
						</svg>
					</div>
				</a>
			</div>

			<div className="h-[50px]" />

			<div className="flex flex-col gap-8 relative">
				<div className="h-[100%] w-[1px] rounded-full absolute top-0 left-[5.5px] bg-primary-def" />
				{courseData.lessons.map((lesson, idx) => (
					<Link href={`/${params.course}/${params.lesson}/${lesson.slug}`} key={idx} className="flex items-center">
						<div className="h-3 w-3 bg-primary-def rounded-full" />
						<p className="p inline-block hover:text-primary-def duration-def cursor-pointer hover:bg-[#00DA83]/10 hover:font-medium px-5 py-2 ml-1 rounded-md">
							{lesson.title}
						</p>
					</Link>
				))}
			</div>

			<div className="h-[50px]" />
		</div>
	)
}

export default Lesson