print('################################ START ###############################');

// Production
db = db.getSiblingDB('api_prod_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_prod_db' }],
  },
);
db.createCollection('users');

// Development
db = db.getSiblingDB('api_dev_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'rooreareadWritedWritet', db: 'api_dev_db' }],
  },
);
db.createCollection('users');

// Testing
db = db.getSiblingDB('api_test_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_test_db' }],
  },
);
db.createCollection('users');

// Staging
db = db.getSiblingDB('api_stag_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_stag_db' }],
  },
);
db.createCollection('users');

// Quality Assurance
db = db.getSiblingDB('api_qa_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_qa_db' }],
  },
);
db.createCollection('users');

print('################################# END ################################');
