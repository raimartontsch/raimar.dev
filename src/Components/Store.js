import create from 'zustand';

const useStore = create(set => ({
	modalState: false,
	setModalState: () => set({ modaleState: true }),
	setAboutMe: true,
	hideAboutMe: () => {
		set({ setAboutMe: false });
	},
	showAboutMe: () => {
		set({ setAboutMe: true });
	},
	setCV: true,
	hideCV: () => {
		set({ setCV: false });
	},
	showCV: () => {
		set({ setCV: true });
	},
	setProjects: true,
	hideProjects: () => {
		set({ setProjects: false });
	},
	showProjects: () => {
		set({ setProjects: true });
	},
	setSocial: true,
	hideSocial: () => {
		set({ setSocial: false });
	},
	showSocial: () => {
		set({ setSocial: true });
	},
	setText: true,
	hideText: () => {
		set({ setText: false });
	},
	showText: () => {
		set({ setText: true });
	},
}));

export default useStore;
