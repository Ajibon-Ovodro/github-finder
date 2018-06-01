class GitHub{
	constructor() {
		this.client_id = '04bf3627a4235ae5a801';
		this.client_secret = 'd00c820d1f8a4434e2637f1e968a481a91061347';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			profile,
			repos
		}
	}
}