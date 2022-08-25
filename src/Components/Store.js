import create from 'zustand';

const useStore = create(set => ({
	modaleState: null,
	setModalState: () => set({ modaleState }),
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
}));

export default useStore;
