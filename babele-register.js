Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'N5eB-pt-br',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
