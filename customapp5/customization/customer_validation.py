import frappe
import frappe.utils

def validateDate(doc,method):
# This Function Check Customer Anniversary Date is Not more than today Date
    if doc.customer_anniversary and doc.customer_anniversary> frappe.utils.today():
        frappe.throw("You Can't Choose Future Date")