// Copyright (c) 2024, naman and contributors
// For license information, please see license.txt

frappe.ui.form.on('custom order table', {
    qty: function(frm, cdt, cdn) {
    calculate_row_total(frm, cdt, cdn);
    calculate_total_cost(frm);
    },
    price: function(frm, cdt, cdn) {
    calculate_row_total(frm, cdt, cdn);
    calculate_total_cost(frm);
    }
    });
    
    function calculate_row_total(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    (row.qty && row.price)?row.total_amount= row.qty * row.price: row.total_amount = 0;
    frm.refresh_field('table');
    }
    
    function calculate_total_cost(frm) {
  
    let total_cost = 0;
    frm.doc.table.forEach(item => {
        total_cost += parseInt(item.total_amount )|| 0;
    });
    frm.doc.total_cost=total_cost
    }
    
    frappe.ui.form.on('custom order', {
    refresh:function(frm){
        debugger
        a=1
        b=1
        console.log(a+b)
    }
});
      
      
        
     
    

