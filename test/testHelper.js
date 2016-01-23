import testDom from 'testdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = testDom('<!doctype html><html><body></body></html>');

chai.use(chaiImmutable);