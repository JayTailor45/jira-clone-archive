import { Ticket } from 'src/models/ticket';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ApiService } from 'src/app/services/api.service';
import { GetIssues } from '../actions';
import { tap } from 'rxjs/operators';

export interface IssueStateModel {
  issues: Ticket[];
}

@State<IssueStateModel>({
  name: 'issue',
  defaults: {
    issues: [],
  },
})
export class IssueState {
  constructor(private apiService: ApiService) {}

  @Selector()
  static issues(state: IssueStateModel): Ticket[] {
    return state.issues;
  }

  @Action(GetIssues)
  getIssues({ getState, setState }: StateContext<IssueStateModel>) {
    return this.apiService.getIssues().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          issues: result,
        });
      })
    );
  }
}
