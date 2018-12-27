/*
const test: Function = (data: any) => {
  console.log(data);
  return (target: Function) => {
    console.log(target);
  };
};
*/
interface IDeprecatedMetadata {
  reason: string;
  replacement: string;
}

const Deprecated: Function = (data: IDeprecatedMetadata) => {
  return (target: Function, propertyKey?: string) => {
    console.warn(`${propertyKey || 'This class'} has been deprecated.` +
    `\nReason: ${data.reason}\nYou should use ${data.replacement}.`);
  };
};

@Deprecated({
  reason: 'I Don’t Know!',
  replacement: 'OtherMessageClass',
})
export class Message {
  @Deprecated({
    reason: 'Useless method!',
    replacement: 'normal constructor.',
  })
  public static newEmptyMessage(): Message {
    return new Message();
  }

  constructor(public text: string = '',
              public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
