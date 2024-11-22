+++
title = "SOLID Principles"
template = "blog-post.html"
description = "Learn how SOLID principles can enhance your codebase by promoting maintainability, scalability, and clean design"
+++
![blog-cover](/images/blog/2024-11-22/solid-principles.png)

<h4>🧐 Why SOLID Principles?</h4>

As software developers, we strive to create systems that are robust, maintainable, and easy to scale. The SOLID principles offer a foundation for writing clean, well-structured code by encouraging single-purpose classes, extensible designs, and minimal dependencies.

Here's a breakdown of each principle with examples and insights into their application:

---

<h4>📜 1. Single Responsibility Principle (SRP)</h4>

**Definition:** A class should have only one reason to change, meaning it should have a single responsibility or purpose.

🚫 **Violates SRP:** A `User` class that saves data to a database and logs user activity.   
✅ **Follows SRP:** Separate concerns into distinct classes like `UserRepository` and `Logger`.

<div class="code-block">
<pre>
// Violates SRP
class User {
  saveToDatabase() {}
  logUserActivity() {}
}

// Follows SRP
class UserRepository {
  saveToDatabase(user: User) {}
}
class Logger {
  logUserActivity(user: User) {}
}
</pre>
</div>

<h4>📦 2. Open/Closed Principle (OCP)</h4>

**Definition:** Software entities (classes, modules, functions) should be open for extension but closed for modification.

**🚫 Violates OCP:** A Shape class that modifies existing code to add new shapes.    
**✅ Follows OCP:** Use inheritance to extend functionality without altering existing code.

<div class="code-block">
<pre>
// Violates OCP
class Shape {
  draw(shapeType: string) {
    if (shapeType === 'circle') { drawCircle(); }
    else if (shapeType === 'square') { drawSquare(); }
  }
}

// Follows OCP
abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw() { /* draw circle */ }
}

class Square extends Shape {
  draw() { /* draw square */ }
}
</pre>
</div>

<h4>🔄 3. Liskov Substitution Principle (LSP)</h4>

**Definition:** Subtypes must be substitutable for their base types without altering the correctness of the program. In other words, a derived class must be able to replace its parent class without causing unexpected behavior.

**How to identify a violation:** If overriding a method in the subclass breaks assumptions about the parent class, this violates LSP. Subtypes must maintain the behavior expected by the base type.

**🚫 Violates LSP**: A Square class inheriting from Rectangle but behaving differently when setting its width or height. The base class assumes independent width and height, but the Square class enforces equal sides, leading to unexpected behavior.    
**✅ Follows LSP**: Use separate classes to avoid mismatched behavior.

<div class="code-block">
<pre>
// Violates LSP
class Rectangle {
  setWidth(width: number) { this.width = width; }
  setHeight(height: number) { this.height = height; }
  getArea() { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width; // Breaks LSP: unexpected behavior
  }
}

// Follows LSP
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea() { return this.width * this.height; }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea() { return this.side * this.side; }
}
</pre>
</div>

<h4>🎛️ 4. Interface Segregation Principle (ISP)</h4>

**Definition:** A class should not be forced to implement interfaces it doesn’t use. Instead, create specific, smaller interfaces.

**🚫 Violates ISP:** A MultifunctionDevice interface requiring unused methods like scan() and fax().    
**✅ Follows ISP:** Create separate interfaces for specific functionalities.
<div class="code-block">
<pre>
// Violates ISP
interface MultifunctionDevice {
  print(): void;
  scan(): void;
  fax(): void;
}

// Follows ISP
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}
</pre>
</div>

<h4>🔗 5. Dependency Inversion Principle (DIP)</h4>

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).

**🚫 Violates DIP:** High-level classes directly depend on low-level implementations.    
**✅ Follows DIP:** Use abstractions to decouple dependencies.
<div class="code-block">
<pre>
// Violates DIP
class EmailService {
  sendEmail() { /* email logic */ }
}

class Notification {
  private emailService = new EmailService();
  notify() { this.emailService.sendEmail(); }
}

// Follows DIP
interface MessageService {
  sendMessage(): void;
}

class EmailService implements MessageService {
  sendMessage() { /* email logic */ }
}

class Notification {
  constructor(private messageService: MessageService) {}
  notify() { this.messageService.sendMessage(); }
}
</pre>
</div>

![garnalds](/images/blog/general/garlands.png)

🥰 By following these principles, you can create software that is easier to maintain, scale, and extend. Whether you're building a small app or a complex system, SOLID principles serve as a guide to avoid technical debt and enhance code quality.

Start applying them today and watch your codebase transform! 🎉