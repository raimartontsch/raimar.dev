import create from 'zustand';

const useStore = create(set => ({
	modalState: false,
	setModalState: () => set({ modaleState: true }),
	setAboutMe: false,
	hideAboutMe: () => {
		set({ setAboutMe: true });
	},
	showAboutMe: () => {
		set({ setAboutMe: false });
	},
	setCV: false,
	hideCV: () => {
		set({ setCV: true });
	},
	showCV: () => {
		set({ setCV: false });
	},
	setProjects: false,
	hideProjects: () => {
		set({ setProjects: true });
	},
	showProjects: () => {
		set({ setProjects: false });
	},
	setSocial: false,
	hideSocial: () => {
		set({ setSocial: true });
	},
	showSocial: () => {
		set({ setSocial: false });
	},
}));

export default useStore;
