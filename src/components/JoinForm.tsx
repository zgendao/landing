import type { FormEvent, ReactNode } from "react";
import { useToast } from "./Toast";

const SKILLS = [
	"Frontend Dev",
	"Backend Dev",
	"BizDev",
	"Smart contracts",
	"Community",
	"Project management",
	"Finance",
	"Product design",
	"DevOps",
	"Content",
	"Memes",
	"UX/UI Design",
	"Illustration",
	"Legal"
];

const SECONDARY_SKILLS = ["Memes", ...SKILLS.filter((skill) => skill !== "Memes")];

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
	return (
		<label className="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" htmlFor={htmlFor}>
			{children}
		</label>
	);
}

export default function JoinForm() {
	const toast = useToast();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const json = JSON.stringify(Object.fromEntries(new FormData(form)));
		const response = await fetch("/form", { method: "post", body: json }).catch(() => null);
		if (response?.ok) {
			toast("success");
			form.reset();
		} else {
			toast("error");
		}
	};

	return (
		<section className="flex justify-center w-full bg-blue-medium">
			<div className="container flex flex-col items-center justify-center px-0 pt-6 mt-16 md:mt-0 lg:mt-24 lg:pt-0 xl:px-28">
				<div className="flex justify-center w-full hatter">
					<div className="mx-8 w-max lg:mx-0">
						<h1 className="mb-8 text-4xl text-center text-white lg:text-black lg:text-5xl xl:text-6xl lg:mt-56 2xl:mt-72">
							BUILD WITH US
						</h1>
						<form onSubmit={handleSubmit}>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="name">What is your name?</FieldLabel>
								<input id="name" name="name" type="text" placeholder="Full name" required />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="describe">How do you busy yourself?</FieldLabel>
								<textarea id="describe" name="describe" placeholder="A short introduction..." rows={4} />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="learn">How do you like to learn?</FieldLabel>
								<textarea id="learn" name="learn" placeholder="Your learning goals" rows={3} />
							</div>
							<div className="flex flex-col items-start justify-start w-full">
								<FieldLabel htmlFor="primary">What say'st are your primary skill?</FieldLabel>
								<div className="flex flex-row items-start justify-start w-full mb-6">
									<select
										id="primary"
										name="primary"
										className="appearance-none w-full bg-input border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none text-gray"
									>
										{SKILLS.map((skill) => (
											<option key={skill}>{skill}</option>
										))}
									</select>
								</div>
							</div>
							<div className="flex flex-col items-start justify-start w-full">
								<FieldLabel htmlFor="secondary">And your secondary skill?</FieldLabel>
								<div className="flex flex-row items-start justify-start w-full mb-6">
									<select
										id="secondary"
										name="secondary"
										className="appearance-none w-full bg-input border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none text-gray"
									>
										{SECONDARY_SKILLS.map((skill) => (
											<option key={skill}>{skill}</option>
										))}
									</select>
								</div>
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="git">Do you have git account?</FieldLabel>
								<input id="git" name="git" type="text" placeholder="Github, Gitlab etc.." />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="project">Do you have any passion project out of school and work?</FieldLabel>
								<textarea id="project" name="project" placeholder="Tell us about your project" rows={4} />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="hobbies">How do you entertain yourself? Tell us about your hobbies.</FieldLabel>
								<textarea id="hobbies" name="hobbies" placeholder="Your freetime activities" rows={3} />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="us">Where have you heard about us?</FieldLabel>
								<input id="us" name="us" type="text" placeholder="Friends, forums" />
							</div>
							<div className="w-full mb-6">
								<FieldLabel htmlFor="reach">How can we reach you?</FieldLabel>
								<textarea id="reach" name="reach" placeholder="Email address, Discord or Telegram account" rows={2} required />
							</div>
							<div className="flex items-center justify-center w-full mb-10">
								<button
									type="submit"
									className="py-4 mt-6 mb-12 font-black text-white transition-transform duration-500 border-black rounded-md px-14 drop-shadow-md hover:scale-105 font-display bg-blue-light active:bg-blue-medium xl:px-16 xl:py-3 xl:text-xl"
								>
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
