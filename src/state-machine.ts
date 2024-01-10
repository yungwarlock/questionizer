
export enum State {
  Home,
  Ready,
  Quiz,
  Complete,
}


export class StateMachine {
  private static state: State = State.Home;
  private static listeners: Array<(state: State) => void> = [];

  private static notifyListeners(): void {
    this.listeners.forEach((listener) => {
      listener(StateMachine.state);
    });
  }

  public static getState(): State {
    return this.state;
  }

  public static addListener(listener: (state: State) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  }

  public static readyWhenYouAre(): void {
    this.state = State.Ready;
    this.notifyListeners();
  }

  public static startQuiz(): void {
    this.state = State.Quiz;
    this.notifyListeners();
  }

  public static completeQuiz(): void {
    this.state = State.Complete;
    this.notifyListeners();
  }
}
