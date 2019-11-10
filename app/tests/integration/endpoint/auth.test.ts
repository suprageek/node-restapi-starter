import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { Response } from 'superagent';

import { server } from '../../../index';

import mailer from '../../../core/mailer';

const expect: Chai.ExpectStatic = chai.expect;

chai.use(chaiHttp);

let emailToken: string = '';

describe.only('Auth endpoints', () => {
	const userData: any = {
		name: 'John DOE',
		username: 'jdoe',
		email: 'john@doe.com',
		password: 'qwerty',
	};
	const baseURL: string = '/v1/auth';

	beforeEach(() => {

	});

	afterEach(() => {

	});

	describe('Register user endpoint', () => {
		const uri: string = `${baseURL}/register`;

		// POST - Fail to create an user
		it('should fail to create an user', () => {
			return chai.request(server)
				.post(uri)
				.send({})
				.then((res: Response) => {
					expect(res).to.have.status(422);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('errors');
				});
		});

		// POST - Create an user
		it('should create an user', () => {
			const spySendMail: sinon.SinonStub = sinon.stub(mailer, 'sendMail');

			return chai.request(server)
				.post(uri)
				.send(userData)
				.then((res: Response) => {
					expect(res).to.have.status(200);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');

					// console.log(spySendMail.getCall(0).args[0]);
					const array: string[] = spySendMail.getCall(0).args[0].context.url.split('=');

					emailToken = array[array.length - 1];

					expect(emailToken).to.be.a('string');
					expect(emailToken.length).to.greaterThan(0);
				});
		});
	});

	describe('Confirm account of the user endpoint', () => {
		const uri: string = `${baseURL}/account/confirm`;

		// POST - Fail to confirm the account
		it('should fail to confirm the account due to invalid data', () => {
			return chai.request(server)
				.post(uri)
				.send({})
				.then((res: Response) => {
					expect(res).to.have.status(422);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('errors');
				});
		});

		// POST - Fail to confirm the account
		it('should fail to confirm the account due to bad token', () => {
			return chai.request(server)
				.post(uri)
				.send({ token: 'token' })
				.then((res: Response) => {
					expect(res).to.have.status(400);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');
				});
		});

		// POST - Confirm the account
		it('should confirm the account', () => {
			return chai.request(server)
				.post(uri)
				.send({ token: emailToken })
				.then((res: Response) => {
					expect(res).to.have.status(200);
					expect(res).to.be.json;
					expect(res.body).to.be.an('object');
				});
		});
	});

});
