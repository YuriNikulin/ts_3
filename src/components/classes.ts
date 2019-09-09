class Person {
  public name: string;
  public surname: string;
  public email: Email;
  constructor(name: string, surname: string, email: Email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
  greet() {
    console.log('hi');
  }
}

class Email {
  private email: string;
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid email");
    }
  }

  get() {
    return this.email;
  }

  private validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}


const Vasya = new Person('Vasya', 'Vasiliev', new Email('foo@bar.com'));
Vasya.greet();

class Teacher extends Person implements AssociationTeacher {
  public students: AssociationStudent[]
  constructor(...args: [string, string, Email]) {
    super(...args);
    console.log('new teacher has been added');
  }

  greet() {
    super.greet();
    console.log('im your new teacher');
  }

  teach() {
    console.log('well... thats it');
  }
}

const Konstantin = new Teacher('Konstantin', 'Valerievich', new Email('kon@mail.com'));
Konstantin.greet();
Konstantin.teach();

interface AssociationTeacher {
  students: AssociationStudent[];
  teach(): void;
}

interface AssociationStudent {
  teachers: AssociationTeacher[];
  learn(): void;
}


interface AggregationCellphone {
  battery: AggregationBattery;
  ring(number: number): void;
};

interface AggregationBattery {
  remainingEnergy: number;
  charge(): void;
}


interface CompositionQuestion {
  title: string;
}

interface CompositionAnswer {
  question: CompositionQuestion;
}

