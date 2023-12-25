export interface Task {
   id: String;
   title: String;
   description: String;
   status: String;
   assignee: String; 
   creationDate: Date;
   dueDate: Date;
   comments: string[;] 
}