### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT (JSON Web Token) is a compact, self-contained way to securely transmit information between parties as a JSON object. JWTs are often used for authentication and authorization in web applications. The token consists of three parts separated by dots: header, payload, and signature. JWTs are commonly used in modern web applications as they allow stateless authentication.

- What is the signature portion of the JWT?  What does it do?

  The signature portion of a JWT is created by encoding the header and payload using a secret key. It ensures the token hasn't been altered during transmission. The signature is created using an algorithm specified in the header (typically HMAC SHA256 or RSA) and allows the receiver to verify the sender's identity and ensure the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes, an attacker can see what's inside the payload of a JWT because it's only Base64Url encoded, not encrypted. The payload contains the claims and is visible to anyone who has the token. This is why sensitive information like passwords should never be stored in a JWT payload. The signature ensures integrity but doesn't provide confidentiality.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  To implement JWT authentication:
  1. User logs in with credentials (username/password)
  2. Server validates credentials and generates a JWT containing user identity/permissions
  3. Server sends JWT to client, which stores it (localStorage, cookies, etc.)
  4. For subsequent requests, client includes JWT in Authorization header
  5. Server validates JWT signature to ensure it's authentic and hasn't been tampered with
  6. If valid, server grants access to resources based on permissions in the token
  7. This approach is stateless as the server doesn't need to store session information

- Compare and contrast unit, integration and end-to-end tests.

  - Unit tests: Test individual components in isolation. They're fast, focused, and help identify issues in specific functions. Dependencies are typically mocked.
  - Integration tests: Test how multiple components work together. They verify that different parts of an application interact correctly. They're slower than unit tests but provide more realistic testing scenarios.
  - End-to-end tests: Test the entire application flow from start to finish, simulating real user interactions. They're the most comprehensive but slowest to run and can be brittle. E2E tests ensure the system works as a whole.

- What is a mock? What are some things you would mock?

  A mock is a simulated object that mimics the behavior of real objects in controlled ways. Mocks are used in testing to replace dependencies that would make tests slow, non-deterministic, or difficult to set up. Things you might mock include:
  - Database connections
  - API calls to external services
  - File system operations
  - Email or SMS sending services
  - Authentication services
  - Time-dependent functions

- What is continuous integration?

  Continuous Integration (CI) is a development practice where developers frequently merge their code changes into a central repository, after which automated builds and tests are run. The primary goals of CI are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new updates. CI tools like Jenkins, GitHub Actions, or CircleCI automate the integration process.

- What is an environment variable and what are they used for?

  Environment variables are dynamic values that can affect the way running processes behave on a computer. They're part of the environment in which a process runs. Environment variables are used for:
  - Configuration management across different environments (development, staging, production)
  - Storing sensitive information like API keys and database credentials outside of code
  - Controlling application behavior without changing code
  - Enabling or disabling features based on deployment environment

- What is TDD? What are some benefits and drawbacks?

  Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. The cycle includes: write a failing test, write minimal code to pass the test, then refactor.
  
  Benefits:
  - Ensures high test coverage
  - Leads to better-designed, modular code
  - Serves as documentation of expected behavior
  - Provides immediate feedback on code changes
  
  Drawbacks:
  - Initial development may be slower
  - Learning curve can be steep
  - Maintenance of test suite requires discipline
  - May lead to over-engineering simple features

- What is the value of using JSONSchema for validation?

  JSONSchema provides a clear, standardized way to validate JSON data structures. Its value includes:
  - Ensuring data consistency and integrity
  - Providing clear documentation of expected data formats
  - Reducing custom validation code and potential bugs
  - Enabling automatic validation in APIs
  - Supporting complex validation rules (types, ranges, patterns)
  - Early detection of data issues before processing

- What are some ways to decide which code to test?

  - Focus on critical business logic and core functionality
  - Test code with high complexity or many edge cases
  - Prioritize functions that process user input or external data
  - Test code that handles sensitive operations (payments, authentication)
  - Cover code that has had bugs in the past
  - Use code coverage tools to identify untested areas
  - Apply risk-based analysis (impact x likelihood)

- What does `RETURNING` do in SQL? When would you use it?

  The `RETURNING` clause in SQL returns values of columns that were modified by an INSERT, UPDATE, or DELETE statement. Instead of needing a separate SELECT query after modification, `RETURNING` provides the affected data in one operation. You would use it when:
  - You need the newly created ID after an INSERT
  - You want to verify what was changed after an UPDATE
  - You need to know what was removed after a DELETE
  - You want to reduce the number of database queries

- What are some differences between Web Sockets and HTTP?

  - HTTP is stateless and primarily unidirectional, while WebSockets provide full-duplex communication
  - HTTP typically requires a new connection for each request-response cycle, while WebSockets maintain a persistent connection
  - WebSockets have lower latency for real-time applications
  - HTTP follows a request-response pattern, while WebSockets allow server to push data without client requests
  - WebSockets are ideal for real-time applications like chat, live updates, and gaming
  - HTTP is more suitable for traditional web page loading and REST APIs

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I prefer Express over Flask for several reasons. Express has a more minimalist approach, giving developers flexibility to structure applications as needed. The Node.js ecosystem provides a vast range of libraries and being able to use JavaScript throughout the stack simplifies development. Express's middleware system is intuitive and powerful, making it easy to add functionality. Additionally, Express's non-blocking I/O model makes it efficient for handling concurrent requests. That said, Flask's simplicity and Python's readability make it excellent for certain projects, particularly those involving data science or machine learning integration.
