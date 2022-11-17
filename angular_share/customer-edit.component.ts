
export class CustomerEditComponent implements OnInit {

  customer: Customer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: ''
  };
 
  errorMessage: string;
  
  @ViewChild('customerForm') customerForm: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      this.route.parent.params.subscribe((params: Params) => {
        let id = +params['id'];
        if (id !== 0) {
              this.getCustomer(id);
        }
      });

  }

  getCustomer(id: number) {
      this.dataService.getCustomer(id).subscribe((customer: Customer) => {
        this.customer = customer;
      });
  }

  submit() {
     this.dataService.updateCustomer(this.customer)
          .subscribe((status: boolean) => {
            if (status) {
              this.customerForm.form.markAsPristine();
            }
            else {
              const msg = 'Unable to update customer';
              this.errorMessage = msg;
            }
        },
        (err: any) => console.log(err));
      
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }

  
  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }

   
  }

}