// plain user data, kept free of Angular/HTTP code on purpose
export class User {
	constructor(
		public readonly id: string,
		public readonly firstName: string,
		public readonly lastName: string,
		public readonly email: string,
		public readonly role: string
	) {}
}