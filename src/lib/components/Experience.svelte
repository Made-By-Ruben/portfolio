<script>
	import { workExperience } from '$lib/data/experience';
</script>

<div class="flex flex-col gap-5">
	<h1 class="text-2xl font-bold">My Experience</h1>

	<ul class="relative max-w-2xl rounded-2xl shadow shadow-gray-400">
		<div class="absolute left-13 h-full w-0.5 bg-gray-200"></div>
		{#each workExperience as experience}
			<li class=" ml-20 p-5">
				<div class="pb-1">
					<a href={experience.website} target="_blank">
						<img src={experience.logoCompany} alt="" class="absolute left-8 size-10 rounded" />
						<h2 class="text-xl font-bold">{experience.nameCompany}</h2></a
					>
					<div class="flex items-center justify-between">
						<h3 class="font-semibold">{experience.jobTitle}</h3>
						<p class="text-xs font-light">{experience.fromUntill}</p>
					</div>
				</div>

				<ul>
					{#each experience.milestonesNl as mileStone}
						<li class="list-disc text-sm">{mileStone}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>
